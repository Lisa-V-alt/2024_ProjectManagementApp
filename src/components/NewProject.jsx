export default function NewProject(){
    return(
     <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <p><label><input>Title</input></label></p>
            <p><label><input>Description</input></label></p>
            <p><label><input>Due Date</input></label></p>
        </div>
    </div>
    );
}