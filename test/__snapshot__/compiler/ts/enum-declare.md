# Kataw parser test case

## Input

`````js
declare enum E {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare enum E {}",
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
                "start": 12,
                "end": 14
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 16,
                "end": 16
            },
            "isConst": false,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 17
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
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

