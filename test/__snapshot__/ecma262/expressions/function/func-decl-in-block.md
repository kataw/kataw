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
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 65,
                            "start": 1,
                            "end": 12
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 13,
                            "end": 13
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
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 65,
                            "start": 21,
                            "end": 32
                        },
                        "asteriskToken": {
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
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 36,
                            "end": 36
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
            "flags": 17,
            "start": 18,
            "end": 41
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                            "flags": 64,
                            "start": 52,
                            "end": 61
                        },
                        "asteriskToken": {
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
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 65,
                            "end": 65
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
            "flags": 17,
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

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 12, end: 13

```

