# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
for (async in { a: 1, b: 2 }) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 10,
                "end": 13
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 20
                        },
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 15,
                    "end": 26
                },
                "flags": 48,
                "start": 13,
                "end": 28
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 31,
                    "end": 31
                },
                "flags": 16,
                "start": 29,
                "end": 32
            },
            "flags": 80,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "for (async in { a: 1, b: 2 }) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

for (async in { a: 1, b: 2 })
  {}
```

### Diagnostics

```javascript
✔ No errors
```

