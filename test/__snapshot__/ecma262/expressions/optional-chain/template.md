# Kataw parser test case

## Input

`````js
a?.`foo`

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 458761,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 134217824,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 8
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "a?.`foo`\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 3, end: 8

```

