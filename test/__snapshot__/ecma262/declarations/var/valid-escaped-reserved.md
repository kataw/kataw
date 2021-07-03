# Kataw parser test case

## Input

`````js
var impl\u0065ments = 1;

var { impl\u0065ments  } = {};

var { int\u0065rface  } = {};

var int\u0065rface = 1;
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
                            "text": "implements",
                            "rawText": "impl\\u0065ments",
                            "flags": 96,
                            "start": 3,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 24,
                "end": 29
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "implements",
                                        "rawText": "impl\\u0065ments",
                                        "flags": 16480,
                                        "start": 31,
                                        "end": 47
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16416,
                                "start": 31,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 29,
                            "end": 50
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 54,
                                "end": 54
                            },
                            "flags": 48,
                            "start": 52,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 29,
                "end": 55
            },
            "flags": 16,
            "start": 24,
            "end": 56
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 56,
                "end": 61
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "interface",
                                        "rawText": "int\\u0065rface",
                                        "flags": 16480,
                                        "start": 63,
                                        "end": 78
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16416,
                                "start": 63,
                                "end": 78
                            },
                            "flags": 32,
                            "start": 61,
                            "end": 81
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 85,
                                "end": 85
                            },
                            "flags": 48,
                            "start": 83,
                            "end": 86
                        },
                        "flags": 16,
                        "start": 61,
                        "end": 86
                    }
                ],
                "flags": 16,
                "start": 61,
                "end": 86
            },
            "flags": 16,
            "start": 56,
            "end": 87
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 87,
                "end": 92
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "interface",
                            "rawText": "int\\u0065rface",
                            "flags": 96,
                            "start": 92,
                            "end": 107
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 109,
                            "end": 111
                        },
                        "flags": 16,
                        "start": 92,
                        "end": 111
                    }
                ],
                "flags": 16,
                "start": 92,
                "end": 111
            },
            "flags": 16,
            "start": 87,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "var impl\\u0065ments = 1;\n\nvar { impl\\u0065ments  } = {};\n\nvar { int\\u0065rface  } = {};\n\nvar int\\u0065rface = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 112
}
```

### Printed

```javascript

var impl\u0065ments = 1;
var {
  impl\u0065ments
} = {};
var {
  int\u0065rface
} = {};
var int\u0065rface = 1;

```

### Diagnostics

```javascript
✔ No errors
```

