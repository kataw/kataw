# Kataw parser test case

## Input

`````js
const enum E {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const enum E {}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 12
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 14,
                "end": 14
            },
            "isConst": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

