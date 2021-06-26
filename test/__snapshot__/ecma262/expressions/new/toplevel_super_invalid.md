# Kataw parser test case

## Input

`````js
new super
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 96,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "new super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 3, end: 9
✖ Dot property must be an identifier - start: 9, end: 9

```

