# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
{
  function(){}
}

{
  function *f(){}
}

{
  async function *f(){}
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
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 1,
                            "start": 1,
                            "end": 12
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 12,
                            "end": 12
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 14
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 14,
                            "end": 16
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 17,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 1,
                            "start": 21,
                            "end": 32
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 32,
                            "end": 34
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 34,
                            "end": 35
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 35,
                            "end": 37
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 37,
                            "end": 39
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 272,
                        "start": 21,
                        "end": 39
                    }
                ],
                "flags": 17,
                "start": 21,
                "end": 39
            },
            "flags": 16,
            "start": 18,
            "end": 41
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 65,
                            "start": 44,
                            "end": 52
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 52,
                            "end": 61
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 61,
                            "end": 63
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 63,
                            "end": 64
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 64,
                            "end": 66
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 67,
                                "end": 67
                            },
                            "flags": 32,
                            "start": 66,
                            "end": 68
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 400,
                        "start": 44,
                        "end": 68
                    }
                ],
                "flags": 17,
                "start": 44,
                "end": 68
            },
            "flags": 16,
            "start": 41,
            "end": 70
        }
    ],
    "isModule": true,
    "source": "{\n  function(){}\n}\n\n{\n  function *f(){}\n}\n\n{\n  async function *f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 12, end: 13

```

