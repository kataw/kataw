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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 16
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "item",
                                "rawText": "item",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 21
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 16,
                            "end": 21
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 21
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "expression": {
                "kind": 134299649,
                "text": "arr",
                "rawText": "arr",
                "flags": 96,
                "transformFlags": 0,
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
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 38
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 39
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 39
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 41
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": true,
    "source": "for await (const item of arr) {\n  item;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

for await (const item of arr)
  {
    item;
  }
```

### Diagnostics

```javascript
✔ No errors
```

