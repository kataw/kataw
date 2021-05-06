# Kataw parser test case

## Input

`````js
function g(a:number=1, e:number=1) {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 13,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 19
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 20,
                            "end": 21
                        },
                        "flags": 34,
                        "start": 11,
                        "end": 21
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 31
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 32,
                            "end": 33
                        },
                        "flags": 34,
                        "start": 22,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 10,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 36,
                    "end": 36
                },
                "flags": 32,
                "start": 34,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "function g(a:number=1, e:number=1) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

function g(a = 1, e = 1) {}
```

### Diagnostics

```javascript
✔ No errors
```

