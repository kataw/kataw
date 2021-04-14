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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                    "kind": 67174403,
                                    "text": "use strict",
                                    "rawText": "use strict",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 81921,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 44,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 47
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 48
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 768,
                                    "start": 48,
                                    "end": 53
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 53,
                                    "end": 55
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 55,
                                    "end": 57
                                },
                                "flags": 256,
                                "start": 48,
                                "end": 57
                            },
                            "flags": 128,
                            "start": 48,
                            "end": 58
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 58
                },
                "flags": 256,
                "start": 12,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "function f(){ \"use strict\"\n /* suffix = */ .foo; eval = 1; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

