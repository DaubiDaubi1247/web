import React, { ComponentType } from 'react';
import Preloader from "../../preloader/Preloader";
import {WithDataFromServer} from "../../../features/types/monsterTypes";

interface WithErrorProps extends WithDataFromServer{
    isLoading: boolean;
}

export default function withErrorAndLoadingHandling<P>(WrappedComponent: ComponentType<P>) {
    return function WithError(props: P & WithErrorProps) {
        const { isLoading, data} = props;

        if (isLoading) {
            return <Preloader/>
        }

        if (!data) {
            return <span>error</span>
        }

        return <WrappedComponent {...props} data={data} />;
    };
}