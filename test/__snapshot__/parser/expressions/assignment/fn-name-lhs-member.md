# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js

o.attr = function() {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "original": "o",
                        "text": "o",
                        "rawText": "\no",
                        "flags": 96,
                        "start": 0,
                        "end": 2
                    },
                    "expression": {
                        "kind": 134299649,
                        "original": "attr",
                        "text": "attr",
                        "rawText": "attr",
                        "flags": 96,
                        "start": 3,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 9,
                        "end": 18
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 18,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 23
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 9,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "source": "\no.attr = function() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

