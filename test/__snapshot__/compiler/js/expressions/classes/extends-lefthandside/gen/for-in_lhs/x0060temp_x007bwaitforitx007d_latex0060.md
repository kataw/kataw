# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\for-in_lhs
> :: test: for-in lhs
> :: case: `temp {waitforit} late`
## Input

`````js
for (`temp {waitforit} late` in x) ;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for (`temp {waitforit} late` in x) ;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099286,
                "initializer": {
                    "kind": 4260568,
                    "rawText": "temp {waitforit} late",
                    "text": "temp {waitforit} late",
                    "literal": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 5,
                    "end": 28
                },
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 33
                },
                "statement": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 36
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
