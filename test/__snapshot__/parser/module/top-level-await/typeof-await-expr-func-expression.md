# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
typeof await function() {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "start": 6,
                        "end": 12
                    },
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 12,
                            "end": 21
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 21,
                            "end": 23
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 26
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 12,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "typeof await function() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

 ; 
```

### Diagnostics

```javascript
✔ No errors
```

