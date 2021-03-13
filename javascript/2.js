
Array.
    prototype
    .
    bubleSort
    =
    function

        ()

    {


        let
            arr
                =
                this
            ,

            len
                =
                arr
                    .
                    length
        ;


        for

        (
            let
                outer
                    =
                    len
            ;
            outer
            >=

            2
            ;
            outer
            --)

        {


            for

            (
                let
                    inner
                        =

                        0
                ;
                inner
                <=
                outer
                -

                1
                ;
                inner
                ++)

            {


                if

                (
                    arr
                        [
                        inner
                        ]

                    >
                    arr
                        [
                    inner
                    +

                    1
                        ])

                {


//升序


                    [
                        arr
                            [
                            inner
                            ],
                        arr
                            [
                        inner
                        +

                        1
                            ]]

                        =

                        [
                            arr
                                [
                            inner
                            +

                            1
                                ],
                            arr
                                [
                                inner
                                ]];

                    console
                        .
                        log
                        ([
                            arr
                                [
                                inner
                                ],
                            arr
                                [
                            inner
                            +

                            1
                                ]]);


                }


            }


        }


        return
        arr
        ;


    }


        [
        1
            ,
            2
            ,
            3
            ,
            4
        ].
    bubleSort
    ()

//[1,2,3,4]