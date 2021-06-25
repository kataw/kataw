# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */;
## Options

`````js
{}
`````
## Input

`````js
let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 7,
                                "end": 28
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 48
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 58,
                                        "end": 68
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 38,
                                "end": 68
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 88,
                                            "end": 98
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 98,
                                            "end": 108
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 88,
                                    "end": 108
                                },
                                "flags": 32,
                                "start": 78,
                                "end": 118
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 7,
                            "end": 118
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 118
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 118
            },
            "flags": 33554448,
            "start": 0,
            "end": 130
        }
    ],
    "isModule": false,
    "source": "let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 130
}
```

### Printed

```javascript

let g = function /* a */ () /* e */ {

} /* after */;
```

### Diagnostics

```javascript
✔ No errors
```

