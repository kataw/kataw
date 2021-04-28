# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
switch (x) {
  case foo:
    async function f(){}
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 12,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 19,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 24,
                                    "end": 34
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 34,
                                    "end": 43
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 43,
                                    "end": 45
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 47
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 48,
                                        "end": 48
                                    },
                                    "flags": 256,
                                    "start": 47,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1153,
                                "start": 24,
                                "end": 49
                            }
                        ],
                        "flags": 128,
                        "start": 12,
                        "end": 49
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 51
            },
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": true,
    "text": "switch (x) {\n  case foo:\n    async function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
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

