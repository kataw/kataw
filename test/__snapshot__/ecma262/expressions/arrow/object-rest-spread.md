# Kataw parser test case

## Input

`````js
var foo = ( { title, ...other } ) => {

};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "title",
                                                    "rawText": "title",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 19
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 24
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "other",
                                                        "rawText": "other",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 29
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 29
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 29
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 33
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 41
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 41
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 41
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "var foo = ( { title, ...other } ) => {\n\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

var foo = ({title, ...other}) => {};
```

### Diagnostics

```javascript
✔ No errors
```

