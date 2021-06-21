# Kataw parser test case

## Input

`````js
var o: { [string]: number } = {};
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
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticToken": null,
                                        "name": null,
                                        "key": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 18,
                                                "end": 25
                                            },
                                            "flags": 2097152,
                                            "start": 18,
                                            "end": 25
                                        },
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 27
                        },
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 48,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "var o: { [string]: number } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

 var o ([string]: number) = {  }; 
```

### Diagnostics

```javascript
✔ No errors
```

