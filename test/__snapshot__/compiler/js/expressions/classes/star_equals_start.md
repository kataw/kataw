# Kataw parser test case

## Input

`````js
class A {*=f(){}}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A {*=f(){}}",
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
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 9
                },
                "decorators": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 9
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 12
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 14
            },
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 16,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

