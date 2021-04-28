# Kataw parser test case

## Input

`````js
function f(){ "use strict"
 /* suffix = */ .foo; eval = 1; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "use strict",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 47
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 48
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 53
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 53,
                                    "end": 55
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 55,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 48,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 48,
                            "end": 58
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 13,
                    "end": 58
                },
                "flags": 32,
                "start": 12,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "function f(){ \"use strict\"\n /* suffix = */ .foo; eval = 1; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
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

