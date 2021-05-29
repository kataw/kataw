# Kataw parser test case

## Input

`````js
function foo(...args: any) { }
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
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 13,
                            "end": 16
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "args",
                            "rawText": "args",
                            "flags": 96,
                            "start": 16,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 25
                        },
                        "initializer": null,
                        "flags": 34,
                        "start": 13,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "function foo(...args: any) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

function foo(...args) {}
```

### Diagnostics

```javascript
✔ No errors
```

