# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\declaration
> :: test: declaration
> :: case: new.target
## Input

`````js
class A extends new.target {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A extends new.target {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 4194973,
                        "name": {
                            "kind": 196711,
                            "text": "target",
                            "rawText": "target",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 26
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 15,
                        "end": 26
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 26
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 28,
                    "end": 29
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 29
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 29
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

