# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
for await (const a of b);
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
                "start": 0,
                "end": 3
            },
            "awaitKeyword": {
                "kind": 82196,
                "flags": 64,
                "start": 3,
                "end": 9
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 16,
                            "end": 18
                        }
                    ],
                    "flags": 16777232,
                    "start": 16,
                    "end": 18
                },
                "flags": 33554448,
                "start": 0,
                "end": 18
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 18,
                "end": 21
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 24,
                "end": 25
            },
            "flags": 80,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "for await (const a of b);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

  for await (const a of b)
    ;

```

### Diagnostics

```javascript
✔ No errors
```

