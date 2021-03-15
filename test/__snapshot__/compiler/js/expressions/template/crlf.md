# Kataw parser test case

## Input

`````js
a
`foo\r\nbar`
b
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "a\n`foo\\r\\nbar`\nb",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 4260568,
                        "rawText": "foo\\r\\nbar",
                        "text": "foo\r\nbar",
                        "literal": false,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 14
                    },
                    "optional": false,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
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
        "end": 16
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```


### Printed


```javascript
@{x2716}@ Soon to be open sourced
```


### Diagnostics


```javascript

```

