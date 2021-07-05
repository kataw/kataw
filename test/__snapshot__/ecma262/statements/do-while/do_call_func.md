# Kataw parser test case

## Input

`````js
do h(function(){});while(x)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "h",
                        "rawText": "h",
                        "flags": 96,
                        "start": 2,
                        "end": 4
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 5,
                                    "end": 13
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 14
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 17
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 5,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 5,
                        "end": 17
                    },
                    "flags": 268435488,
                    "start": 2,
                    "end": 18
                },
                "flags": 16,
                "start": 2,
                "end": 19
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 19,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 25,
                "end": 26
            },
            "flags": 80,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do h(function(){});while(x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

do  h(function () {});
while (x);
```

### Diagnostics

```javascript
✔ No errors
```

