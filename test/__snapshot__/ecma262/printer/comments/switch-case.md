# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
/*-1*/ foo /*0*/ : /*1*/ switch /*2*/ ( /*3*/ false /*4*/ ) /*5*/ {
    /*6*/ case /*7*/ false /*8*/ : /*9*/
        /*10*/ break /*11*/ foo /*12*/;
    /*13*/ default /*14*/ : /*15*/
    /*16*/ case /*17*/ false /*18*/ : /*19*/ { /*20*/
    /*21*/ } /*22*/
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 0,
                "end": 10
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 10,
                "end": 18
            },
            "statement": {
                "kind": 160,
                "switchKeyword": {
                    "kind": 37757024,
                    "flags": 80,
                    "start": 18,
                    "end": 31
                },
                "expression": {
                    "kind": 205586437,
                    "flags": 96,
                    "start": 39,
                    "end": 51
                },
                "caseBlock": {
                    "kind": 152,
                    "clauses": [
                        {
                            "kind": 175,
                            "caseKeyword": {
                                "kind": 4194382,
                                "flags": 81,
                                "start": 67,
                                "end": 82
                            },
                            "expression": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 82,
                                "end": 94
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 94,
                                "end": 102
                            },
                            "statements": [
                                {
                                    "kind": 150,
                                    "breakKeyword": {
                                        "kind": 37757005,
                                        "flags": 81,
                                        "start": 102,
                                        "end": 129
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 129,
                                        "end": 140
                                    },
                                    "flags": 16,
                                    "start": 102,
                                    "end": 148
                                }
                            ],
                            "flags": 16,
                            "start": 67,
                            "end": 148
                        },
                        {
                            "kind": 170,
                            "defaultKeyword": {
                                "kind": 4194387,
                                "flags": 81,
                                "start": 148,
                                "end": 167
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 167,
                                "end": 176
                            },
                            "statements": [],
                            "flags": 16,
                            "start": 148,
                            "end": 176
                        },
                        {
                            "kind": 175,
                            "caseKeyword": {
                                "kind": 4194382,
                                "flags": 81,
                                "start": 176,
                                "end": 199
                            },
                            "expression": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 199,
                                "end": 212
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 212,
                                "end": 221
                            },
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 17,
                                        "start": 230,
                                        "end": 230
                                    },
                                    "flags": 16,
                                    "start": 221,
                                    "end": 250
                                }
                            ],
                            "flags": 16,
                            "start": 176,
                            "end": 250
                        }
                    ],
                    "flags": 16,
                    "start": 67,
                    "end": 250
                },
                "flags": 80,
                "start": 18,
                "end": 259
            },
            "flags": 16,
            "start": 0,
            "end": 259
        }
    ],
    "isModule": false,
    "source": "/*-1*/ foo /*0*/ : /*1*/ switch /*2*/ ( /*3*/ false /*4*/ ) /*5*/ {\n    /*6*/ case /*7*/ false /*8*/ : /*9*/\n        /*10*/ break /*11*/ foo /*12*/;\n    /*13*/ default /*14*/ : /*15*/\n    /*16*/ case /*17*/ false /*18*/ : /*19*/ { /*20*/\n    /*21*/ } /*22*/\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 259
}
```

### Printed

```javascript
/*-1*/
foo /*0*/:/*1*/ switch/*2*/ (/*3*/false /*4*/)/*5*/ {
   /*6*/case/*7*/ false /*8*/:/*9*/ 
     /*10*/break/*11*/ foo /*12*/;
   /*13*/default/*14*/: 
   /*15*/
   /*16*/case/*17*/ false /*18*/:/*19*/ 
    {/*20*/
     /*21*/} /*22*/
}

```

### Diagnostics

```javascript
✔ No errors
```

