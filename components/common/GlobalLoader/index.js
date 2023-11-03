import { CircularProgress } from "@mui/material";

const GlobalLoader = () => {
    return (
        <div className="global-loader">
            <CircularProgress id="loader" className="global-loader-colour" size="5rem" />
        </div>
    );
};

export default GlobalLoader;
