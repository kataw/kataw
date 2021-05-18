# Kataw parser test case

## Input

`````js
let {a,b=0,c:d,e:f=0,[g]:[h]}=0
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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 10
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 11,
                                        "end": 14
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 20
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "flags": 32,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "value": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "h",
                                                            "rawText": "h",
                                                            "flags": 96,
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 26,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 28
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 21,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 30,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 31
            },
            "flags": 33554448,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "let {a,b=0,c:d,e:f=0,[g]:[h]}=0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

let {
  a,
  b = 0,
  c: d,
  e: f = 0,
  [g]: [h]
} = 0;
```

### Diagnostics

```javascript
✔ No errors
```

