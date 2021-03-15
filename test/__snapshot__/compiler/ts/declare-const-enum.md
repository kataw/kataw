# Kataw parser test case

## Input

`````js
declare const enum E {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare const enum E {}",
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
                "start": 18,
                "end": 20
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 22,
                "end": 22
            },
            "isConst": true,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 23
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
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

