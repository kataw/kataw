# Kataw parser test case

## Input

`````js
function foo(callback: (_1:bool, _2:string) => number){}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "start": 13,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 43,
                                    "end": 46
                                },
                                "parameters": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "bool",
                                                    "rawText": "bool",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 31
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 27,
                                                "end": 31
                                            },
                                            "flags": 0,
                                            "start": 22,
                                            "end": 31
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_2",
                                                "rawText": "_2",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 35
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "flags": 0,
                                            "start": 32,
                                            "end": 42
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 22,
                                    "end": 42
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 46,
                                    "end": 53
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 22,
                                "end": 53
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 53
                        },
                        "right": null,
                        "flags": 32,
                        "start": 13,
                        "end": 53
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 54
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 55,
                    "end": 55
                },
                "flags": 32,
                "start": 54,
                "end": 56
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "function foo(callback: (_1:bool, _2:string) => number){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

function foo(callback) {}
```

### Diagnostics

```javascript
✔ No errors
```

