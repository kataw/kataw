# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: `temp {waitforit} late`
## Input

`````js
new `temp {waitforit} late`
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "new `temp {waitforit} late`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 4260568,
                    "rawText": "temp {waitforit} late",
                    "text": "temp {waitforit} late",
                    "literal": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 27
                },
                "typeArguments": null,
                "argumentList": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 27
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
    "end": 27
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

