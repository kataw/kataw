# Kataw parser test case

## Input

`````js
var obj: { foo?: boolean } = {};
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "value": {
                                            "kind": 134234254,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 24
                                        },
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 7,
                            "end": 26
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 48,
                            "start": 28,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "var obj: { foo?: boolean } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

var obj = {};
```

### Diagnostics

```javascript
✔ No errors
```

