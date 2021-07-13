# Kataw parser test case

## Input

`````js
for (a?.b of c);

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "chain": {
                    "kind": 202,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 536870944,
                            "transformFlags": 2,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "of",
                        "rawText": "of",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 12
                    },
                    "flags": 536870944,
                    "transformFlags": 2,
                    "start": 9,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5,
                "end": 12
            },
            "condition": null,
            "incrementor": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "for (a?.b of c);\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
for (a?.b.of; ; c);
```

### Diagnostics

```javascript
✔ No errors
```

