# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export declare declare var name;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export declare declare var name;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "declare",
                    "rawText": "declare",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 22
                },
                "type": {
                    "kind": 236,
                    "typeName": {
                        "kind": 196711,
                        "text": "var",
                        "rawText": "var",
                        "flags": 65538,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 22,
                        "end": 26
                    },
                    "typeArguments": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 22,
                    "end": 31
                },
                "typeParameters": null,
                "flags": 65570,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 6,
                "end": 26
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "name",
                    "rawText": "name",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 26,
                    "end": 31
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 26,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 27,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

