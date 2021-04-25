# Kataw parser test case

## Input

`````js
var x:
 | 1
 | 2
= 2;

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "declareKeyword": null,
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "value": 1,
                                        "flags": 0,
                                        "start": 9,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134217968,
                                        "value": 2,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 16
                                    }
                                ],
                                "flags": 0,
                                "start": 11,
                                "end": 16
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 16
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 768,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "var x:\n | 1\n | 2\n= 2;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

