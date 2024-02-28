//render workspaces page
export default function Workspace() {
    //render an iframe containing the kasm workspace
    //users presented with login screen and default password prompt
    return(
        <div className="flex flex-col items-center h-5/6 my-auto">
            <iframe className="w-11/12 h-full" src="https://kasm.containeriseit.dev" allow="autoplay; microphone; camera; clipboard-read; clipboard-write; window-management; self; https://kasm.containeriseit.dev"></iframe>
            <p>Default Password For First Time Users: newKasmUser123!</p>
        </div>
    )
}