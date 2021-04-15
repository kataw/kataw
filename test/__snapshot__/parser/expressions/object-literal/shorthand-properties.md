# Kataw parser test case

## Input

`````js
var foo,
    get,
    set;

var x = {
    foo,
    get,
    set
};

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 7
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "get",
                            "rawText": "get",
                            "flags": 768,
                            "start": 8,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 8,
                        "end": 16
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "set",
                            "rawText": "set",
                            "flags": 768,
                            "start": 17,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 17,
                        "end": 25
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 26
        },
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 26,
                "end": 31
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 31,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 37,
                                        "end": 45
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 768,
                                        "start": 46,
                                        "end": 54
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 768,
                                        "start": 55,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 1,
                                "start": 37,
                                "end": 63
                            },
                            "flags": 256,
                            "start": 35,
                            "end": 65
                        },
                        "flags": 128,
                        "start": 31,
                        "end": 65
                    }
                ],
                "flags": 128,
                "start": 31,
                "end": 65
            },
            "flags": 128,
            "start": 26,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "var foo,\n    get,\n    set;\n\nvar x = {\n    foo,\n    get,\n    set\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

