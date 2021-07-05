# Kataw parser test case

## Input

`````js
try {} catch ([a,b, {c, d:e=0, [f]:g=0, h=i}]) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 15,
                                "end": 16
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 22
                                        },
                                        {
                                            "kind": 329,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "e",
                                                "rawText": "e",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "flags": 32,
                                            "start": 23,
                                            "end": 29
                                        },
                                        {
                                            "kind": 329,
                                            "key": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "start": 30,
                                                "end": 34
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "g",
                                                "rawText": "g",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 36
                                            },
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 38
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "h",
                                                "rawText": "h",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 134299649,
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 43
                                            },
                                            "flags": 0,
                                            "start": 39,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 21,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "start": 15,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 45
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 48,
                        "end": 48
                    },
                    "flags": 16,
                    "start": 46,
                    "end": 49
                },
                "flags": 80,
                "start": 6,
                "end": 49
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "try {} catch ([a,b, {c, d:e=0, [f]:g=0, h=i}]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

try {} catch ([a, b, {c, d: e = 0, [f]: g = 0, h = i}]) {}
```

### Diagnostics

```javascript
✔ No errors
```

