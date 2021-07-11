# Kataw parser test case

## Input

`````js
var {nonExistent, defaults = "hi", foo = 3} = x;
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "nonExistent",
                                        "rawText": "nonExistent",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 16
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "defaults",
                                            "rawText": "defaults",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "hi",
                                            "rawText": "\"hi\"",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 33
                                        },
                                        "flags": 0,
                                        "start": 17,
                                        "end": 33
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 34,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 42
                                        },
                                        "flags": 0,
                                        "start": 34,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 43
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 45,
                            "end": 47
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 47
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "var {nonExistent, defaults = \"hi\", foo = 3} = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

var  { nonExistent, defaults = "\"hi\"", foo = 3 } = x ;

```

### Diagnostics

```javascript
✔ No errors
```

