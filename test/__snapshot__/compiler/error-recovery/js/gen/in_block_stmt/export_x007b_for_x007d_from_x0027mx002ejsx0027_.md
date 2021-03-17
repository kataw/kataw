# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_block_stmt
> :: test: in block stmt
> :: case: export { for } from 'm.js';
## Input

`````js
{ export { for } from 'm.js'; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ export { for } from 'm.js'; }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 76,
                        "declaration": null,
                        "namedExports": {
                            "kind": 152,
                            "exportsList": {
                                "kind": 80,
                                "specifiers": [
                                    {
                                        "kind": 79,
                                        "moduleExportName": null,
                                        "name": {
                                            "kind": 196711,
                                            "text": "for",
                                            "rawText": "for",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "binding": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 14
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 16
                        },
                        "exportFromClause": null,
                        "fromClause": {
                            "kind": 4261583,
                            "text": "m.js",
                            "rawText": "m.js",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 28
                        },
                        "isTypeOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 29
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
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
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

