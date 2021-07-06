# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
for (const x in xs) {}
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 10,
                            "end": 12
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 12,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "xs",
                "rawText": "xs",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 18
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 22
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (const x in xs) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for (const x in xs) {}
```

### Diagnostics

```javascript
✔ No errors
```

