# Kataw parser test case

## Input

`````js
const someObj: { id: number } = {};
`````

## Options

`````js
{ allowTypes: true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "someObj",
                            "rawText": "someObj",
                            "flags": 96,
                            "start": 5,
                            "end": 13
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "id",
                                            "rawText": "id",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 19
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 20,
                                                "end": 27
                                            },
                                            "flags": 2097152,
                                            "start": 20,
                                            "end": 27
                                        },
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 14,
                                "end": 29
                            },
                            "flags": 2097152,
                            "start": 14,
                            "end": 29
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 48,
                            "start": 31,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 34
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 34
            },
            "flags": 33554448,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "const someObj: { id: number } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

const someObj: { id: number } = {};

```

### Diagnostics

```javascript
✔ No errors
```

