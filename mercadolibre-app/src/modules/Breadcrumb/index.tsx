
export default function Breadcrumb (props: any) {
    console.log(props);
    return (
        <div className="breadcrumb">
            {
                props.categories ? 
                <ol>
                    {
                    props.categories.map( (category: string, index: number) => (
                        <li key={category}>
                             <a href="#" >
                                {category}
                            </a>
                            {
                                index < props.categories.length - 1 ?
                                <svg className="chevron" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" fillRule="evenodd" d="M1 1.343L6.657 7 1 12.657"></path>
                                </svg>
                                : null
                            }   
                        </li>
                    ))
                    }
                </ol>
                : null
            }
        </div>
    )
}
