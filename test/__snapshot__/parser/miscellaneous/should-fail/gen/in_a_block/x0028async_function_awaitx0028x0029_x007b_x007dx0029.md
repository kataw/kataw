# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: in a block
> :: case: (async function await() { })
## Options

`````js
{}
`````
## Input

`````js
{ (async function await() { }) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 8
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 17
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 23,
                                    "end": 25
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 29
                                },
                                "returnType": null,
                                "flags": 160,
                                "start": 3,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{ (async function await() { }) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async generator expression - start: 17, end: 23

```

