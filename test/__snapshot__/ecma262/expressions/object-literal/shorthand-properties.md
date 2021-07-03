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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 7
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "get",
                            "rawText": "get",
                            "flags": 96,
                            "start": 8,
                            "end": 16
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 16
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "set",
                            "rawText": "set",
                            "flags": 96,
                            "start": 17,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
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
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
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
                                        "flags": 97,
                                        "start": 37,
                                        "end": 45
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 97,
                                        "start": 46,
                                        "end": 54
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 97,
                                        "start": 55,
                                        "end": 63
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 37,
                                "end": 63
                            },
                            "flags": 49,
                            "start": 35,
                            "end": 65
                        },
                        "flags": 16,
                        "start": 31,
                        "end": 65
                    }
                ],
                "flags": 16,
                "start": 31,
                "end": 65
            },
            "flags": 16,
            "start": 26,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "var foo,\n    get,\n    set;\n\nvar x = {\n    foo,\n    get,\n    set\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

var foo, get, set;
var x = {
  foo,
  get,
  set
};

```

### Diagnostics

```javascript
✔ No errors
```

