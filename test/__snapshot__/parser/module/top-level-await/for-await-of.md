# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
for await (const item of arr) {
  item;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": {
                "kind": 90224,
                "flags": 64,
                "start": 3,
                "end": 9
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "item",
                            "rawText": "item",
                            "flags": 96,
                            "start": 16,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 16,
                        "end": 21
                    }
                ],
                "flags": 16777232,
                "start": 16,
                "end": 21
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 0,
                "start": 21,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "arr",
                "rawText": "arr",
                "flags": 96,
                "start": 24,
                "end": 28
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "item",
                                "rawText": "item",
                                "flags": 96,
                                "start": 31,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 31,
                            "end": 39
                        }
                    ],
                    "flags": 17,
                    "start": 31,
                    "end": 39
                },
                "flags": 16,
                "start": 29,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": true,
    "source": "for await (const item of arr) {\n  item;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

for await ( of arr)
  {
    item;
  }
```

### Diagnostics

```javascript
✔ No errors
```

