# Kataw parser test case

## Input

`````js
x = {get this(this):number{}};
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "this",
                                        "rawText": "this",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "this",
                                                    "rawText": "this",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 18
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 14,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 19
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 26
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 28
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 29
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "x = {get this(this):number{}};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'get' accessor cannot have a `this` parameter - start: 14, end: 18
✖ A type annotation is required for the `this` parameter. - start: 18, end: 19

```

