# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\await\gen\simple
> :: test: simple
> :: case: await = 1
## Input

`````js
await = 1
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "await = 1",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "await",
                    "rawText": "await",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

