# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
> :: test: export assign
> :: case: interface string {
## Input

`````js
export interface string { = interface string {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export interface string { = interface string {",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "string",
                "rawText": "string",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 23
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 25,
                "end": 25
            },
            "flags": 65,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 6,
            "end": 25
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "string",
                "rawText": "string",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 44
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 46,
                "end": 46
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 27,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 26,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 45,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

