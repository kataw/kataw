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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": {
                                "kind": 134251592,
                                "flags": 65,
                                "start": 6,
                                "end": 9
                            },
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 2097216,
                                        "start": 9,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134217968,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 2097216,
                                        "start": 14,
                                        "end": 16
                                    }
                                ],
                                "flags": 2097152,
                                "start": 11,
                                "end": 16
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 16
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "var x:\n | 1\n | 2\n= 2;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

  var x: | 1 | 2 = 2;

```

### Diagnostics

```javascript
✔ No errors
```

